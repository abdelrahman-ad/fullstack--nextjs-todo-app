import { ModeToggle } from "@/components/ModeToggle";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
   
export  function Header() {
    return (
      <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
        <h1>My Todo App</h1>
        <ModeToggle/>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton/>
        </SignedOut>
      </header>
    );
  }
   