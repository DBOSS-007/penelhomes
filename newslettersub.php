<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function subscribe(Request $request)
    {
        // Get the email from the request
        $email = $request->input('email');

        // Create a new subscriber record
        $subscriber = new Subscriber();
        $subscriber->email = $email;
        $subscriber->save();

        // Return a success response
        return Response::json(['message' => 'Subscription successful']);
    }
}
