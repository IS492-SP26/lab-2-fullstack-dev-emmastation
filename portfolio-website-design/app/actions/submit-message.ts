"use server"

import { createClient } from "@/lib/supabase/server"
import { z } from "zod"

const messageSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Invalid email address").max(320),
  message: z.string().min(1, "Message is required").max(5000),
})

export async function submitMessage(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  }

  const parsed = messageSchema.safeParse(raw)

  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0].message }
  }

  const supabase = await createClient()

  const { error } = await supabase.from("messages").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    message: parsed.data.message,
  })

  if (error) {
    console.error("Supabase insert error:", error.message)
    return { success: false, error: "Failed to send message. Please try again." }
  }

  return { success: true }
}
