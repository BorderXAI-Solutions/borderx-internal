import React, { useState } from 'react';
import { Bot, TrendingUp, Users, AlertCircle, Loader2, DollarSign, Heart, Gift, MessageSquare, ShoppingCart } from 'lucide-react';
import { LivestreamMetrics } from './livestream/LivestreamMetrics';
import { LiveRecommendations } from './livestream/LiveRecommendations';
import { useAI } from '../hooks/useAI';

export function LiveCopilot() {
  const [streamUrl, setStreamUrl] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [metrics, setMetrics] = useState({
    gmv: 0,
    sales: 0,
    viewers: 0,
    likes: 0,
    gifts: 0,
    chatCount: 0
  });
  const { loading, error } = useAI();

  const handleStartMonitoring = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!streamUrl.trim()) return;
    setIsStreaming(true);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        gmv: prev.gmv + Math.random() * 100,
        sales: prev.sales + Math.floor(Math.random() * 3),
        viewers: Math.floor(1000 + Math.random() * 500),
        likes: prev.likes + Math.floor(Math.random() * 20),
        gifts: prev.gifts + Math.floor(Math.random() * 2),
        chatCount: prev.chatCount + Math.floor(Math.random() * 5)
      }));
    }, 3000);

    return () => clearInterval(interval);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Live Stream Co-pilot</h1>

      <div className="grid lg:grid-cols-12 gap-6">
        {/* Stream Input Section */}
        <div className="lg:col-span-12">
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            <form onSubmit={handleStartMonitoring}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Live Stream URL/Code
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={streamUrl}
                    onChange={(e) => setStreamUrl(e.target.value)}
                    placeholder="Enter your TikTok live stream URL or code..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    disabled={isStreaming}
                  />
                  <button
                    type="submit"
                    disabled={loading || !streamUrl.trim() || isStreaming}
                    className="flex items-center justify-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <Bot className="h-5 w-5" />
                        Start Monitoring
                      </>
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                  <AlertCircle className="h-5 w-5" />
                  <p>{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Metrics Dashboard */}
        {isStreaming && (
          <>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <h3 className="font-medium text-gray-700">GMV</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">${metrics.gmv.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">Total Sales Value</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingCart className="h-5 w-5 text-blue-600" />
                    <h3 className="font-medium text-gray-700">Orders</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{metrics.sales}</p>
                  <p className="text-sm text-gray-500">Total Orders</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <h3 className="font-medium text-gray-700">Viewers</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{metrics.viewers}</p>
                  <p className="text-sm text-gray-500">Current Viewers</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="h-5 w-5 text-red-600" />
                    <h3 className="font-medium text-gray-700">Likes</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{metrics.likes}</p>
                  <p className="text-sm text-gray-500">Total Likes</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="h-5 w-5 text-yellow-600" />
                    <h3 className="font-medium text-gray-700">Gifts</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{metrics.gifts}</p>
                  <p className="text-sm text-gray-500">Total Gifts</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-5 w-5 text-indigo-600" />
                    <h3 className="font-medium text-gray-700">Chat Messages</h3>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{metrics.chatCount}</p>
                  <p className="text-sm text-gray-500">Total Messages</p>
                </div>
              </div>
            </div>

            {/* Real-time Recommendations */}
            <div className="lg:col-span-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="h-6 w-6 text-indigo-600" />
                  <h2 className="text-xl font-semibold">Live Recommendations</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
                    <p className="text-sm text-green-800">
                      Engagement is high! Consider showcasing your best-selling product now.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    <p className="text-sm text-blue-800">
                      Many viewers asking about product features. Prepare a quick demo.
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 border border-purple-100 rounded-lg">
                    <p className="text-sm text-purple-800">
                      Chat activity increasing. Good time for a Q&A session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}