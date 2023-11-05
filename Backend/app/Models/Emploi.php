<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Emploi extends Model
{
    use HasFactory;

    protected $fillable = [
        'intitule_post',
        'entreprise',
        'type_de_travail',
        'lieu_travail',
        'salaire',
        'type_contrat',

    ];
}
