<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use MongoDB\Model\DatabaseInfo;

class DatabaseTransformer extends TransformerAbstract
{
    public function transform(DatabaseInfo $databaseInfo) {
        return [
            'name' => $databaseInfo->getName(),
            'size' => $databaseInfo->getSizeOnDisk(),
            'empty' => $databaseInfo->isEmpty(),
        ];
    }
}
