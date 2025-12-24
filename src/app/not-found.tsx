"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-xmb-darker px-6">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <h1 className="text-9xl font-bold bg-gradient-to-r from-xmb-blue via-xmb-purple to-xmb-pink bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              Seite nicht gefunden
            </h2>
            <p className="text-xmb-gray text-lg max-w-md mx-auto">
              Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button href="/" variant="primary" size="lg">
              <Home className="w-5 h-5" />
              Zur Startseite
            </Button>
            <motion.button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 px-8 py-4 text-base bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Zurück
            </motion.button>
          </div>

          {/* Additional Links */}
          <div className="pt-12 space-y-4">
            <p className="text-xmb-gray text-sm">
              Oder besuchen Sie eine unserer Seiten:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="text-xmb-blue hover:text-xmb-purple transition-colors text-sm"
              >
                Services
              </Link>
              <Link
                href="/company"
                className="text-xmb-blue hover:text-xmb-purple transition-colors text-sm"
              >
                Über uns
              </Link>
              <Link
                href="/contact"
                className="text-xmb-blue hover:text-xmb-purple transition-colors text-sm"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

