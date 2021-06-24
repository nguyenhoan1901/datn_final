<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class news extends Model
{
    //
    protected $table = "news";

    protected $fillable = ['id_commander', 'title', 'content', 'created_at', 'updated_at',];

    public function commander(){
        return $this->belongsTo('App\Models\commander','id_commander','id');
    }
}
