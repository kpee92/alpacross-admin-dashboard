"use client";

import UserDetailClient from "../UserDetailClient";
import { Suspense } from "react";

export default function UserViewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserDetailClient />
    </Suspense>
  );
}
