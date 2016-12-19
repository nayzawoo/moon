<?php

namespace App\Transformers;

use DateTime;
use League\Fractal\TransformerAbstract;
use MongoDB\BSON\ObjectID;
use MongoDB\BSON\Regex;
use MongoDB\BSON\UTCDateTime;
use MongoDB\Model\BSONArray;
use MongoDB\Model\BSONDocument;

class DocumentOutputTransformer extends TransformerAbstract
{
    private $uuid;

    public function transform(BSONDocument $document)
    {
        $this->uuid = generateRandomString(6);
        $output = $this->encodeDocument($document);
        $id = (string)$document->_id;

        $data = json_encode($output, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
        $data = $this->removeQuotes($data);
        return [
            'id'   => $id,
            'data' => $data,
        ];
    }

    public function encodeDocument(BSONDocument $document)
    {
        $documentArray = iterator_to_array($document);
        array_walk_recursive($documentArray, function (&$value) {
            if (is_object($value)) {
                $value = $this->encodeValue($value);
            }
        });
        return $documentArray;
    }

    public function encodeBSONArray(BSONArray $array) {
        $array = $array->getArrayCopy();
        array_walk_recursive($array, function (&$value) {
            if (is_object($value)) {
                $value = $this->encodeValue($value);
            }
        });
        return $array;
    }

    /**
     * @param $value
     * @return Regex|UTCDateTime|BSONDocument|string
     */
    public function encodeValue($value)
    {
        switch (get_class($value)) {
            case ObjectID::class:
                $value = "{$this->uuid}-ObjectID({$value})";
                break;
            case UTCDateTime::class:
                /**
                 * @var $value UTCDateTime
                 */
                $date = $value->toDateTime()->format(DateTime::ATOM);
                $value = "{$this->uuid}-UTCDateTime({$date})";
                break;
            case Regex::class:
                /**
                 * @var $value Regex
                 */
                $value = '/' . $value->getPattern() . '/' . $value->getFlags();
                break;
            case BSONDocument::class:
                /**
                 * @var $value BSONDocument
                 */
                $value = $this->encodeDocument($value);
                break;
            case BSONArray::class:
                /**
                 * @var $value BSONArray
                 */
                $value = $this->encodeBSONArray($value);
                break;
        }
        return $value;
    }

    private function removeQuotes($str)
    {
        $find = ["/\"{$this->uuid}-(.+)\((.+)\)\"/"];
        $replace = ['$1("$2")'];
        return preg_replace($find, $replace, $str);
    }
}
