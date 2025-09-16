export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Contact form submission:", body);

    // Normally you would save to MongoDB here
    // e.g., await Contact.create(body);

    return new Response(JSON.stringify({ message: "Form submitted" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response(JSON.stringify({ message: "Error" }), { status: 500 });
  }
}
