'use client';

import { useState } from 'react';

export default function MessageButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    message: '',
    name: '',
    email: '',
    includeIdentity: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY || 'e8ab6a9e-2fd9-462c-a966-f458016a98e4',
          subject: 'New Anonymous Message from Portfolio',
          message: formData.message,
          ...(formData.includeIdentity && {
            from_name: formData.name || 'Anonymous',
            from_email: formData.email || 'Not provided',
          }),
          anonymous: !formData.includeIdentity,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ message: '', name: '', email: '', includeIdentity: false });
        setTimeout(() => {
          setSubmitStatus('idle');
          setIsOpen(false);
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Send anonymous message"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Terminal Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" style={{ cursor: 'default' }}>
          <div className="w-full max-w-2xl bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 animate-fade-in" style={{ cursor: 'default' }}>
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-slate-400 text-sm font-mono ml-2">anonymous-message.sh</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm">
              <div className="mb-4 text-slate-400 text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">➜</span>
                  <span>Send anonymous message (identity hidden by default)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">➜</span>
                  <span>Optionally include your identity below</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Message Field */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-cyan-400 text-xs">MESSAGE:</span>
                  </div>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                {/* Include Identity Checkbox */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="includeIdentity"
                    checked={formData.includeIdentity}
                    onChange={(e) => setFormData({ ...formData, includeIdentity: e.target.checked })}
                    className="w-4 h-4 rounded bg-slate-800 border-slate-600 text-cyan-500 focus:ring-cyan-500"
                  />
                  <label htmlFor="includeIdentity" className="text-slate-400 text-xs">
                    Include my identity (optional)
                  </label>
                </div>

                {/* Identity Fields (shown when checkbox is checked) */}
                {formData.includeIdentity && (
                  <div className="space-y-3 pl-7 animate-fade-in">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-purple-400 text-xs">NAME:</span>
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name (optional)"
                        className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-pink-400 text-xs">EMAIL:</span>
                      </div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com (optional)"
                        className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.message.trim()}
                    className="flex-1 px-6 py-3 rounded-lg font-semibold text-white bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-6 py-3 rounded-lg font-semibold text-slate-300 bg-slate-700 hover:bg-slate-600 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="text-center text-green-400 text-xs animate-fade-in">
                    ✓ Message sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-center text-red-400 text-xs animate-fade-in">
                    ✗ Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
