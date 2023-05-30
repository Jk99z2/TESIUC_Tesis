<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tema extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre_tesis',
        'descripcion_tesis',
        'carrera',
        'estado_tema',
        'asesores',
        'revisores',
        'alumnos',
        'id_propone',
    ];
}
