<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    protected $table = "estudiantes";
    protected $fillable = ['id','nombres', 'apellidos', 'nota', 'materia'];
    //protected $hidden = ['id'];

    public static function get()
    {
        return Estudiante::all();
    }

    public function getEstudiantePorId($id)
    {
        return Estudiante::find($id);
    }

    use HasFactory;
}
