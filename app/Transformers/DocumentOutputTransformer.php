<?php

namespace App\Transformers;

use DateTime;
use League\Fractal\TransformerAbstract;
use MongoDB\BSON\ObjectID;
use MongoDB\BSON\Regex;
use MongoDB\BSON\UTCDateTime;
use MongoDB\Model\BSONDocument;

class DocumentOutputTransformer extends TransformerAbstract
{
    public function transform(BSONDocument $document)
    {
        $output = $this->encodeDocument($document);
        return $output;
    }

    public function encodeDocument(BSONDocument $document) {
        $documentArray = iterator_to_array($document);
        array_walk_recursive($documentArray, function (&$value) {
            if (is_object($value)) {
                $value = $this->encodeValue($value);
            }
        });
        return $documentArray;
    }

    /**
     * @param $value
     * @return Regex|UTCDateTime|BSONDocument|string
     */
    public function encodeValue($value)
    {
        switch (get_class($value)) {
            case ObjectID::class:
                $value = "ObjectID('" . $value . "')";
                break;
            case UTCDateTime::class:
                /**
                 * @var $value UTCDateTime
                 */
                $date = $value->toDateTime()->format(DateTime::ATOM);
                $value = "UTCDateTime('" . $date . "')";
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
        }
        return $value;
    }
}
