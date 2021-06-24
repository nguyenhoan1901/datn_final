<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class News extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('news', function (Blueprint $table) {
            $table->smallIncrements('id');
            $table->unsignedSmallInteger('id_commander')->nullable();
            $table->string('title',100);
            $table->text('content');
            $table->timestamps();

            $table->foreign('id_commander')->references('id')->on('commanders');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('news');
    }
}
