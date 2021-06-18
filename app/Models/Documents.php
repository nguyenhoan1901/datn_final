<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Documents extends Model
{

    protected $table = "documents";

    protected $fillable = ['id', 'title', 'content'];
}
