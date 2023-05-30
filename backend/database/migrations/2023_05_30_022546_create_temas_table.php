<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('temas', function (Blueprint $table) {
            $table->id('id_tema');
            $table->string('nombre_tesis');
            $table->text('descripcion_tesis');
            $table->string('carrera');
            $table->string('estado_tema');
            $table->string('asesores');
            $table->string('revisores');
            $table->integer('alumnos');
            $table->integer('id_propone');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temas');
    }
};
