<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tema;

class TemaController extends Controller
{

    public function index()
    {
        $temas = Tema::all();
        return $temas;
    }


    public function store(Request $request)
    {
        $tema = new Tema();
        $tema->nombre_tesis = $request->nombre_tesis;
        $tema->descripcion_tesis = $request->descripcion_tesis;
        $tema->carrera = $request->carrera;
        $tema->estado_tema = $request->estado_tema;
        $tema->asesores = $request->asesores;
        $tema->revisores = $request->revisores;
        $tema->alumnos = $request->alumnos;
        $tema->id_propone = $request->id_propone;

        $tema->save();
    }


    public function show(string $id)
    {
        $tema = Tema::where('id_tema', $id)->first();
        return $tema;
    }


    public function update(Request $request, string $id)
    {
        $tema = Tema::findOrFail($request->$id);
        $tema->nombre_tesis = $request->nombre_tesis;
        $tema->descripcion_tesis = $request->descripcion_tesis;
        $tema->carrera = $request->carrera;
        $tema->estado_tema = $request->estado_tema;
        $tema->asesores = $request->asesores;
        $tema->revisores = $request->revisores;
        $tema->alumnos = $request->alumnos;
        $tema->id_propone = $request->id_propone;

        $tema->save();

        return $tema;
    }


    public function destroy(string $id)
    {
        $tema = Tema::where('id_tema', $id)->delete();
        return $tema;
    }
}
