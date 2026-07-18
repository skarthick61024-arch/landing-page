"use client";

import * as React from "react";
import Image from "next/image";
import { Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterCTA() {
  return (
    <div className="bg-[#0F0F0F] pt-24 overflow-hidden">
      
      {/* Top Section: CTA Block */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Elevate <br />
              Your Downloads?
            </h2>
            <p className="text-lg text-white/50 max-w-md font-medium leading-relaxed">
              When it comes to downloading, don't settle for less. Get the premium download experience today.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="/teletorrent.apk" download>
                <Button className="bg-primary text-black font-bold px-8 h-14 rounded-full text-lg hover:bg-primary/90 hover:scale-105 transition-transform">
                  Download APK
                </Button>
              </a>
              <Button variant="outline" className="text-white border-white/20 bg-white/5 font-bold px-8 h-14 rounded-full text-lg hover:bg-white/10 hover:text-white flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M4.095 2C3.89 2 3.738 2.052 3.593 2.146C3.251 2.373 3 2.802 3 3.42V20.58C3 21.198 3.251 21.627 3.593 21.854C3.738 21.948 3.89 22 4.095 22C4.246 22 4.385 21.967 4.512 21.895L18.423 13.916C19.123 13.516 19.5 12.87 19.5 12C19.5 11.13 19.123 10.484 18.423 10.084L4.512 2.105C4.385 2.033 4.246 2 4.095 2Z"/>
                </svg>
                Google Play
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-[400px] mx-auto lg:ml-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <Image
              src="/mockups/photo_2026-07-13_22-39-33.jpg"
              alt="TeleTorrent Preview"
              width={400}
              height={600}
              className="rounded-[3rem] border-8 border-[#1A1A1A] shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          
        </div>
      </div>

      {/* Massive Solid Green Footer Block */}
      <footer className="bg-primary pt-16 pb-8 px-6 rounded-t-[4rem] text-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Branding */}
            <div className="flex flex-col gap-6 md:col-span-1">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="TeleTorrent"
                  width={32}
                  height={32}
                  className="w-8 h-8 drop-shadow-sm brightness-0"
                />
                <span className="font-extrabold text-2xl tracking-tight text-black">TeleTorrent</span>
              </div>
              <p className="text-black/70 font-medium">
                The ultimate companion app for your Telegram media. Download large files faster securely on Android.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">
              <h4 className="font-extrabold text-xl mb-2">Services</h4>
              <a href="#" className="font-bold text-black/70 hover:text-black">Features</a>
              <a href="#" className="font-bold text-black/70 hover:text-black">Screenshots</a>
              <a href="#" className="font-bold text-black/70 hover:text-black">Download APK</a>
              <a href="#" className="font-bold text-black/70 hover:text-black">Reviews</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-extrabold text-xl mb-2">Company</h4>
              <a href="#" className="font-bold text-black/70 hover:text-black">FAQ</a>
              <a href="#" className="font-bold text-black/70 hover:text-black">Community</a>
              <a href="#" className="font-bold text-black/70 hover:text-black">Report a Bug</a>
              <a href="#" className="font-bold text-black/70 hover:text-black">Contact</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-extrabold text-xl mb-2">Connect</h4>
              <a href="#" className="font-bold text-black/70 hover:text-black flex items-center gap-2">
                <MessageCircle className="w-5 h-5" /> Telegram
              </a>
              <a href="#" className="font-bold text-black/70 hover:text-black flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M4.095 2C3.89 2 3.738 2.052 3.593 2.146C3.251 2.373 3 2.802 3 3.42V20.58C3 21.198 3.251 21.627 3.593 21.854C3.738 21.948 3.89 22 4.095 22C4.246 22 4.385 21.967 4.512 21.895L18.423 13.916C19.123 13.516 19.5 12.87 19.5 12C19.5 11.13 19.123 10.484 18.423 10.084L4.512 2.105C4.385 2.033 4.246 2 4.095 2Z"/>
                </svg>
                Google Play
              </a>
            </div>
            
          </div>

          <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-black/60 text-center md:text-left">
            <p>© {new Date().getFullYear()} TeleTorrent Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-black">Privacy Policy</a>
              <a href="#" className="hover:text-black">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
