<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class commander extends Model
{
    //
    protected $table = "commanders";
    public $timestamps = false;

    protected $fillable = ['id', 'username', 'fullname', 'birthday','gender','hometown','phonenumber','email','rank','position_government','organization','thumb'];

    public function users(){
        return $this->hasOne('App\Models\Users','id','id');
    }
}
