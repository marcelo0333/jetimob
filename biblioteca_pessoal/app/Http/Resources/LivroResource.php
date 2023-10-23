<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LivroResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'identify' => $this->id,
            'titulo' => strtoupper($this->titulo),
            'autor' => $this->autor,
            'classificacao' => $this->classificacao,
            'resenha' => $this->resenha,
            'data_de_adicao' => $this->data_adicao
        ];
    }
}
