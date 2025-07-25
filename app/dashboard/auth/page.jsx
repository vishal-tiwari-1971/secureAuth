"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthActivityPage;
const react_1 = __importDefault(require("react"));
const ProtectedRoute_1 = require("@/components/ProtectedRoute");
const auth_activity_1 = require("@/components/dashboard/auth-activity");
function AuthActivityPage() {
    return (<ProtectedRoute_1.ProtectedRoute>
      <div className="w-full min-h-0 flex flex-col items-center py-6 px-2 md:px-6">
        <div className="w-full max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-purple-800">Authentication Activity</h1>
          <p className="text-gray-500 mb-4 md:mb-6">Review your recent logins and security events.</p>
          <div className="flex flex-col gap-4">
            <auth_activity_1.AuthActivity />
            <div className="bg-white rounded-xl shadow p-4 md:p-6 border border-purple-100">
              <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-purple-700">Security Tips</h2>
              <ul className="space-y-2 md:space-y-3 text-sm text-gray-700">
                <li>• Always enable Multi-Factor Authentication (MFA)</li>
                <li>• Never share your password or OTP with anyone</li>
                <li>• Review your login history regularly</li>
                <li>• Report suspicious activity immediately</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute_1.ProtectedRoute>);
}
