import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createIssueSchema } from "../../validationsSchemas";

// API for creating issues
export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
        // invalid values provided by client
        return NextResponse.json(validation.error.format(), { status: 400})
    }

    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description}
    })

    // object created
    return NextResponse.json(newIssue, { status: 201 });
}