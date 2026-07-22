import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  LogIn,
} from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Firebase login will be added later

    console.log("Login Data:", formData);

    setTimeout(() => {
      setLoading(false);

      alert("Firebase Authentication coming soon 🚀");
    }, 1200);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >

      {/* Email */}

      <div>

        <label className="mb-2 block font-semibold">

          Email Address

        </label>

        <div className="relative">

          <Mail
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/30"
            required
          />

        </div>

      </div>

      {/* Password */}

      <div>

        <label className="mb-2 block font-semibold">

          Password

        </label>

        <div className="relative">

          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 py-4 pl-12 pr-14 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/30"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
          >

            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}

          </button>

        </div>

      </div>
            {/* Remember Me & Forgot Password */}

      <div className="flex items-center justify-between">

        <label className="flex items-center gap-3 text-sm">

          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />

          <span className="text-slate-600 dark:text-slate-300">

            Remember Me

          </span>

        </label>

        <Link
          to="/forgot-password"
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >

          Forgot Password?

        </Link>

      </div>

      {/* Login Button */}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >

        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />

            Signing In...

          </>
        ) : (
          <>
            <LogIn className="h-5 w-5" />

            Login

          </>
        )}

      </motion.button>

      {/* Divider */}

      <div className="relative py-2">

        <div className="absolute inset-0 flex items-center">

          <div className="w-full border-t border-slate-200 dark:border-slate-700" />

        </div>

        <div className="relative flex justify-center">

          <span className="bg-white px-4 text-sm text-slate-500 dark:bg-slate-900">

            OR

          </span>

        </div>

      </div>

      {/* Register */}

      <div className="text-center">

        <p className="text-slate-500">

          Don't have an account?

        </p>

        <Link
          to="/register"
          className="mt-2 inline-block font-semibold text-blue-600 transition hover:text-blue-700"
        >

          Create an Account

        </Link>

      </div>
          </motion.form>
  );
}