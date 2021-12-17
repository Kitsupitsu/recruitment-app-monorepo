<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

class Controller extends Controller
{

     try {
            DB::connection()->getPdo();
            if(DB::connection()->getDatabaseName()){
                echo "Yes! Successfully connected to the DB: " . DB::connection()->getDatabaseName();
            }else{
                die("Could not find the database. Please check your configuration.");
            }
        } catch (\Exception $e) {
            die("Could not open connection to database server.  Please check your configuration.");
        }


    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

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
