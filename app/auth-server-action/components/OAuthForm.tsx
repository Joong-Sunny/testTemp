'use client'

import { createBrowserClient } from '@supabase/ssr'
import { Button } from "@/components/ui/button";
import React from "react";

export default function OAuthForm() {

	const supabase = createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	)

	const loginWithGithub = () => {
		console.log(`${location.origin}/auth-server-action/callback`)

		supabase.auth.signInWithOAuth({
			provider: 'github',
			options: 	{
			redirectTo: `https://ponaaaebmrmbgisdhbrx.supabase.co/auth/v1/callback`,
		}
	})
	}


	return <Button className="w-full" onClick={loginWithGithub}>Login With Github</Button>;
}
