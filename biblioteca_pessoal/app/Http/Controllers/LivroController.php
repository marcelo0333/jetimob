<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUpdateLivroRequest;
use App\Http\Resources\LivroResource;
use App\Models\Livro;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;

class LivroController extends Controller
{
    public function index(){

        $livros = Livro::all();
        return LivroResource::collection($livros);

    }

    public function cadastrar(StoreUpdateLivroRequest $request){

        $data = $request->validated();

        $livro = Livro::create($data);

        return new LivroResource($livro);
    }
    public function show(string $id){
        $livro = Livro::findOrFail($id);

        return new LivroResource($livro);
    }
    public function update(StoreUpdateLivroRequest $request, string $id){
        $livro = Livro::findOrFail($id);
        $data = $request->all();
        $livro->update($data);
        return new LivroResource($livro);
    }
    public function destroy(string $id){
        $livro = Livro::findOrFail($id);
        $livro->delete($id);
        return response()->json([], HttpResponse::HTTP_NO_CONTENT);

    }
}
