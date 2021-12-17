<?php

namespace App\Http\Controllers;

class Controller extends Controller
{

    /*
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    */
    public function store(Request $request)
    {
     $request->validate([
        'name'=> 'required',
        'surname'=> 'required',
        'email'=> 'required',
        'country'=> 'required',
        'city' => 'required',
        'department'=> 'required',
        'yearsInEestec' => 'required',
        'MotivationalLetter' => 'required'
     ]);

     User::create($request->all());
     $users -> save();

     return redirect('/') ->with('success','Record has been added');

     }

    public function destroy($id){
        //
    }


}
