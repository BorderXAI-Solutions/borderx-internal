import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Brain, Video, Target, Users, Bot, ClipboardList, Package, ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          BorderX AI: Social Commerce Intelligence
        </h1>
        <p className="text-xl text-gray-600">
          Complete AI-powered suite for market research, strategy, content creation, and business management
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link
          to="/market-research"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="h-8 w-8 text-indigo-600" />
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-indigo-600 transition-colors" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Market Research</h2>
          <p className="text-gray-600">
            Comprehensive market analysis, SWOT insights, and competitor research powered by AI
          </p>
        </Link>

        <Link
          to="/strategy"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Brain className="h-8 w-8 text-indigo-600" />
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-indigo-600 transition-colors" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Strategy Creation</h2>
          <p className="text-gray-600">
            Generate data-driven marketing strategies and actionable business plans
          </p>
        </Link>

        <Link
          to="/content"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Video className="h-8 w-8 text-indigo-600" />
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-indigo-600 transition-colors" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Content Creation</h2>
          <p className="text-gray-600">
            AI-powered short video script generation and creative support for trending content
          </p>
        </Link>

        <Link
          to="/campaigns"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-indigo-600" />
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-indigo-600 transition-colors" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Ad Campaigns</h2>
          <p className="text-gray-600">
            Smart ad placement and campaign optimization using AI-driven customer insights
          </p>
        </Link>

        <Link
          to="/creators"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-indigo-600" />
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-indigo-600 transition-colors" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Creators Matching</h2>
          <p className="text-gray-600">
            Connect with perfect-fit creators using AI-powered matching and collaboration tools
          </p>
        </Link>

        <Link
          to="/copilot"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Bot className="h-8 w-8 text-indigo-600" />
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-indigo-600 transition-colors" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Live Co-pilot</h2>
          <p className="text-gray-600">
            Real-time AI assistance for content optimization and performance tracking
          </p>
        </Link>

        <Link
          to="/crm"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <ClipboardList className="h-8 w-8 text-indigo-600" />
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-indigo-600 transition-colors" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">CRM</h2>
          <p className="text-gray-600">
            AI-powered customer relationship management with smart insights and automation
          </p>
        </Link>

        <Link
          to="/inventory"
          className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <Package className="h-8 w-8 text-indigo-600" />
            <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-indigo-600 transition-colors" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Inventory</h2>
          <p className="text-gray-600">
            Smart inventory management with predictive analytics and automated reordering
          </p>
        </Link>
      </div>
    </div>
  );
}