<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livro extends Model
{
    use HasFactory;
    protected $fillable = [
        'titulo',
        'autor',
        'classificacao',
        'resenha',
        'data_adicao',
        'created_at',
        'updated_at',
    ];
    protected $hidden = [

    ];
}
