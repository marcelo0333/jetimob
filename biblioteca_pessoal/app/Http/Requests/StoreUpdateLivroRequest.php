<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateLivroRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'titulo' => [
                'required',
                'max:255',
            ],
            'autor' => [
                'required',
                'max:255',
            ],
            'classificacao' => [
                'required',
                'integer',
                'between:0,5',
            ],
            'resenha' => [
                'required',
                'max:255',
            ],


        ];
    }
}
