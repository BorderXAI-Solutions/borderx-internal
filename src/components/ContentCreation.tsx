import React, { useState } from 'react';
import { Video, Sparkles, TrendingUp, AlertCircle, Loader2 } from 'lucide-react';
import { useAI } from '../hooks/useAI';

export function ContentCreation() {
  const [formData, setFormData] = useState({
    topic: '',
    keywords: '',
    duration: '60',
    style: 'casual'
  });
  const [results, setResults] = useState(null);
  const { loading, error, generateVideoScript } = useAI();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!Object.values(formData).every(Boolean)) return;

    try {
      const data = await generateVideoScript(
        formData.topic,
        formData.keywords,
        formData.duration,
        formData.style
      );
      setResults(data);
    } catch (err) {
      console.error('Failed to generate video script:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Short Video Production</h1>

      <form onSubmit={handleSubmit} className="mb-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Video Topic
            </label>
            <input
              type="text"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              placeholder="e.g., Product showcase, Tutorial, Behind the scenes"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Keywords
            </label>
            <input
              type="text"
              value={formData.keywords}
              onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
              placeholder="Enter keywords separated by commas"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              disabled={loading}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (seconds)
              </label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                disabled={loading}
              >
                <option value="30">30 seconds</option>
                <option value="60">60 seconds</option>
                <option value="90">90 seconds</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Style
              </label>
              <select
                value={formData.style}
                onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                disabled={loading}
              >
                <option value="casual">Casual & Friendly</option>
                <option value="professional">Professional & Formal</option>
                <option value="energetic">Energetic & Dynamic</option>
              </select>
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
              <AlertCircle className="h-5 w-5" />
              <p>{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !Object.values(formData).every(Boolean)}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Generating Script...
              </>
            ) : (
              <>
                <Video className="h-5 w-5" />
                Generate Video Script
              </>
            )}
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Video className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Script Generation</h2>
          </div>
          <p className="text-gray-600">
            AI-powered video scripts optimized for engagement
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Creative Support</h2>
          </div>
          <p className="text-gray-600">
            Creative direction and style recommendations
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Trend Analysis</h2>
          </div>
          <p className="text-gray-600">
            Insights on trending topics and content styles
          </p>
        </div>
      </div>

      {results && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Generated Script</h2>
          <div className="space-y-4">
            {/* Display generated script content here */}
          </div>
        </div>
      )}
    </div>
  );
}