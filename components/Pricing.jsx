import React from "react";

const Pricing = () => {
  return (
    <>
      <div id="pricing" className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <h2 className="text-xl font-bold tracking-widest uppercase text-indigo-500 mb-10">
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Basic
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Perfect for individuals or small startups looking to get
                started.
              </p>
              <ul class="space-y-2 text-gray-700 dark:text-gray-400 mb-6">
                <li>✔️ 1 Website</li>
                <li>✔️ Basic SEO</li>
                <li>✔️ 3 Email Accounts</li>
              </ul>
              <div class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                $49
              </div>
              <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>

            <div class="bg-white dark:bg-gray-800 border-2 border-blue-600 rounded-xl p-6 shadow-md hover:shadow-xl transition scale-105">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Standard
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                A great choice for growing teams needing more power.
              </p>
              <ul class="space-y-2 text-gray-700 dark:text-gray-400 mb-6">
                <li>✔️ 3 Websites</li>
                <li>✔️ Full SEO</li>
                <li>✔️ 10 Email Accounts</li>
                <li>✔️ Priority Support</li>
              </ul>
              <div class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                $99
              </div>
              <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>

            <div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Premium
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Everything your business needs to scale effectively.
              </p>
              <ul class="space-y-2 text-gray-700 dark:text-gray-400 mb-6">
                <li>✔️ Unlimited Websites</li>
                <li>✔️ Advanced SEO & Analytics</li>
                <li>✔️ Unlimited Emails</li>
                <li>✔️ Dedicated Manager</li>
              </ul>
              <div class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                $199
              </div>
              <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
