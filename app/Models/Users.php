<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Users extends Model
{
    use HasTranslations;
    use SoftDeletes;

    protected $table = "users";

    protected $fillable = ['username', 'password','is_admin'];

    public function student(){
        return $this->hasOne('App\Models\student','id','id');
    }
    public function commander(){
        return $this->hasOne('App\Models\commander','id','id');
    }
}
