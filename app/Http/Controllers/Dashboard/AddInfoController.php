<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class AddInfoController extends Controller
{
    public function index()
    {
        return inertia('Dashboard/AddInfo/Index', [
            'contact' => Contact::with('admin:id,name')->first(),
        ]);
    }

    public function update(Request $request, string $id)
    {
        $contact = Contact::find($id);

        $contact->update([
            'data' => $request->all(),
        ]);

        return response()->noContent();
    }
}
