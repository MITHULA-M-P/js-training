interface Profile {
  displayName: string;
  bio?: string;
  website?: string;
  avatarUrl?: string;
}

function renderProfile(profile: Profile): string {
  let output = `Name: ${profile.displayName}\n`;

  // Show bio if available
  output += `Bio: ${profile.bio ?? "No bio provided"}\n`;

  // Show website only if it exists
  if (profile.website) {
    output += `Website: ${profile.website}`;
  }

  return output;
}

// Profile with all fields
const profile1: Profile = {
  displayName: "Alice",
  bio: "Frontend Developer",
  website: "https://alice.dev",
  avatarUrl: "avatar.png"
};

// Profile with only displayName
const profile2: Profile = {
  displayName: "Bob"
};

console.log(renderProfile(profile1));
console.log(renderProfile(profile2));

/*
❌ This causes an error:

profile.bio.toUpperCase();

Error:
Object is possibly 'undefined'.

Reason:
'bio' is optional.
TypeScript prevents calling methods on values
that might not exist.
Always check first:

if (profile.bio) {
    console.log(profile.bio.toUpperCase());
}
*/