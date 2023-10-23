<?php

namespace App\Http\Controllers;

use App\Http\Resources\LivroResource;
use App\Models\Livro;
use Illuminate\Http\Request;

class LivroController extends Controller
{
    public function index(){

        $livros = Livro::paginate();
        return LivroResource::collection($livros);

    }

    public function cadastrar(Request $request){

        $data = $request->all();

        $livro = Livro::create($data);

        return new LivroResource($livro);
    }
}
