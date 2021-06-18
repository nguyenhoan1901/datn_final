<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Documents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('documents', function (Blueprint $table) {
            $table->smallIncrements('id');
            $table->unsignedSmallInteger('id_commander');
            $table->text('title')->default(NULL)->nullable();
            $table->text('content')->default(NULL)->nullable();
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
        Schema::dropIfExists('documents');
    }
}
