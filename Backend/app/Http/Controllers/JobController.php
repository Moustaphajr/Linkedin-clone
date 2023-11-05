<?php

namespace App\Http\Controllers;

use App\Models\Emploi;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function createJob(Request $request)
    {


        try {

            $validated = $request->validate([
                'intitule_post' => 'required|min:3|max:255',
                'entreprise' => 'required|min:3|max:255',
                'type_de_travail' => 'required|min:3|max:255',
                'lieu_travail' => 'required|min:3|max:255',
                'salaire' => 'required|min:3|max:255',
                'type_contrat' => 'required|min:3|max:255',

            ]);
            if ($validated) {
                $Emploi = Emploi::create([
                    'intitule_post' => $request->input('intitule_post'),
                    'entreprise' => $request->input('entreprise'),
                    'type_de_travail' => $request->input('type_de_travail'),
                    'lieu_travail' => $request->input('lieu_travail'),
                    'salaire' => $request->input('salaire'),
                    'type_contrat' => $request->input('type_contrat'),
                ]);
                if ($Emploi) {
                    return response()->json([
                        'success' => true,
                        'message' => 'Emploi créer avec succès',
                    ]);
                }
            }
        } catch (\throwable $th) {
            return response()->json([
                'success' => false,
                'message' => $th->getMessage()
            ]);
        }
    }




    public function getJobs()
    {


        try {
            $Emplois = Emploi::all();
            if ($Emplois) {
                return response()->json([
                    'success' => true,
                    'Emplois' => $Emplois
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => $th->getMessage()
            ]);
        }
    }
}
