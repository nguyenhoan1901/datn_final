<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class student extends Model
{
    //
    protected $table = "students";
    public $timestamps = false;

    protected $fillable = ['id', 'username', 'fullname',
        'birthday', 'gender', 'hometown', 'phonenumber', 'email', 'rank',
        'position_government', 'organization', 'date_enlistment', 'date_party', 'official', 'position_party','role','id_group', 'thumb'];
    
    public function users(){
        return $this->hasOne('App\Models\Users','id','id');
    }
    public function group(){
        return $this->belongsTo('App\Models\group','id_group','id');
    }
}
