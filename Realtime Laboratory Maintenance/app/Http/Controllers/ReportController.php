<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    // Store the report data
    public function store(Request $request)
    {
        $validated = $request->validate([
            'laboratory' => 'required|string',
            'issue_type' => 'required|string',
            'specific_issue' => 'required|string',
        ]);

        $report = Report::create([
            'laboratory' => $validated['laboratory'],
            'issue_type' => $validated['issue_type'],
            'specific_issue' => $validated['specific_issue'],
        ]);

        return response()->json(['message' => 'Report submitted successfully'], 201);
    }

    // Get all the reports
    public function index()
    {
        return Report::all();
    }
}
