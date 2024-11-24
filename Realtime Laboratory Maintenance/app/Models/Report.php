<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    // Specify the table associated with the model (if different from the plural form of the model name)
    protected $table = 'reports'; // Optional if the table name follows Laravel's pluralization convention

    // Define which fields are mass assignable (important for security)
    protected $fillable = ['laboratory', 'issue_type', 'specific_issue']; 

    // If you need to cast certain attributes to a specific data type (e.g., dates), you can use:
    // protected $casts = [
    //     'created_at' => 'datetime',
    // ];
}
