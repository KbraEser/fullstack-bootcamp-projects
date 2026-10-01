import React, { useState } from "react";
import { useLang } from "../context/LanguageContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";

export default function ApiDemo() {
  const { data } = useLang();
  const copy = data.apiDemoSection;
  const firstProject = data.projectsSection.projects[0];

  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_REQRES_API_KEY;
  const handleSubmit = async () => {
    setStatus("loading");
    setError(null);
    setResult(null);
    try {
      const res = await axios.post(
        "https://reqres.in/api/workintech",
        {
          name: firstProject.title,
          job: firstProject.features.join(", "),
        },
        {
          headers: {
            "x-api-key": apiKey,
          },
        },
      );
      setResult(res.data);
      setStatus("success");
      toast.success("POST request successful");
    } catch (e) {
      setError(e?.message ?? String(e));
      setStatus("error");
      toast.error("POST request failed");
    }
  };

  return (
    <section
      id="api-demo"
      className="mb-24 mt-10 border-t border-zinc-200 pt-14 dark:border-zinc-700"
    >
      <h2 className="mb-4 font-inter text-2xl font-semibold text-heading dark:text-zinc-100">
        {copy.title}
      </h2>
      <p className="mb-6 max-w-3xl font-inter text-sm text-text dark:text-zinc-300">
        {copy.description}
      </p>
      <p className="mb-4 font-inter text-xs text-text/80 dark:text-zinc-400">
        {copy.note}
      </p>
      <button
        type="button"
        className="button-primary mb-6 w-auto min-w-[200px]"
        disabled={status === "loading"}
        onClick={handleSubmit}
      >
        {status === "loading" ? copy.loading : copy.button}
      </button>

      {status === "success" && result && (
        <div className="rounded-lg bg-footer p-4 dark:bg-zinc-900">
          <p className="mb-2 font-inter text-sm font-medium text-heading dark:text-zinc-200">
            {copy.successLabel}{" "}
            <span className="text-secondary">(POST /api/users)</span>
          </p>
          <pre className="overflow-x-auto font-mono text-xs text-text dark:text-zinc-300">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      {status === "error" && (
        <p className="font-inter text-sm text-red-600 dark:text-red-400">
          {copy.errorLabel}: {error}
        </p>
      )}
    </section>
  );
}
