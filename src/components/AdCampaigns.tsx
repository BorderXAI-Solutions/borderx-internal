import React, { useState } from 'react';
import { Target, Users, TrendingUp, DollarSign, AlertCircle, Loader2 } from 'lucide-react';
import { useAI } from '../hooks/useAI';

export function AdCampaigns() {
  const [formData, setFormData] = useState({
    objective: '',
    audience: '',
    budget: '',
    platform: 'all'
  });
  const [results, setResults] = useState(null);
  const { loading, error, generateAdCampaign } = useAI();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!Object.values(formData).every(Boolean)) return;

    try {
      const data = await generateAdCampaign(
        formData.objective,
        formData.audience,
        formData.budget,
        formData.platform
      );
      setResults(data);
    } catch (err) {
      console.error('Failed to generate ad campaign:', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Ad Campaign Management</h1>

      <form onSubmit={handleSubmit} className="mb-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Objective
            </label>
            <input
              type="text"
              value={formData.objective}
              onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
              placeholder="e.g., Increase sales, Brand awareness, Lead generation"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Audience
            </label>
            <textarea
              value={formData.audience}
              onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
              placeholder="Describe your target audience demographics, interests, and behaviors"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              disabled={loading}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget
              </label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                placeholder="e.g., $1000/month"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Platform
              </label>
              <select
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                disabled={loading}
              >
                <option value="all">All Platforms</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="google">Google Ads</option>
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
                Generating Campaign...
              </>
            ) : (
              <>
                <Target className="h-5 w-5" />
                Generate Campaign
              </>
            )}
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Smart Targeting</h2>
          </div>
          <p className="text-gray-600">
            AI-powered audience targeting and segmentation
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Audience Insights</h2>
          </div>
          <p className="text-gray-600">
            Deep analysis of customer behavior and preferences
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="h-6 w-6 text-indigo-600" />
            <h2 className="text-xl font-semibold">Budget Optimization</h2>
          </div>
          <p className="text-gray-600">
            Smart budget allocation across platforms
          </p>
        </div>
      </div>

      {results && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Campaign Strategy</h2>
          <div className="space-y-4">
            {/* Display generated campaign strategy here */}
          </div>
        </div>
      )}
    </div>
  );
}