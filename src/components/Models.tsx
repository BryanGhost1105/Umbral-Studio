/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Check, ArrowRight, Sparkles, Star, Users } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function BookingModal({ isOpen, onClose, title = "Book a 15-minute call" }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({ name: "", email: "", agencySize: "1-5", note: "" });

  const dates = [
    { day: "Thu", num: "21", full: "Thursday, May 21" },
    { day: "Fri", num: "22", full: "Friday, May 22" },
    { day: "Mon", num: "25", full: "Monday, May 25" },
    { day: "Tue", num: "26", full: "Tuesday, May 26" },
    { day: "Wed", num: "27", full: "Wednesday, May 27" },
  ];

  const times = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    } else if (step === 2 && formData.name && formData.email) {
      setStep(3);
    }
  };

  const resetModal = () => {
    setSelectedDate("");
    setSelectedTime("");
    setStep(1);
    setFormData({ name: "", email: "", agencySize: "1-5", note: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetModal}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          id="booking-modal-card"
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl md:p-8 text-neutral-900 border border-neutral-100 z-10"
        >
          {/* Close Button */}
          <button
            onClick={resetModal}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-50 transition-colors"
          >
            <X size={18} />
          </button>

          {step < 3 && (
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">
                {step}
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-neutral-400">
                Step {step} of 2 • Scheduling
              </span>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">{title}</h3>
                <p className="mt-2 text-sm text-neutral-500">
                  Select a convenient slot to chat with our operations lead about how Umbral Studio can support your business goals.
                </p>
              </div>

              {/* Date selection list */}
              <div className="space-y-3">
                <label className="text-xs font-bold tracking-wider uppercase text-neutral-400">Select Date</label>
                <div className="grid grid-cols-5 gap-2">
                  {dates.map((d) => {
                    const isSelected = selectedDate === d.full;
                    return (
                      <button
                        key={d.num}
                        type="button"
                        onClick={() => setSelectedDate(d.full)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                          isSelected
                            ? "border-neutral-900 bg-neutral-900 text-white"
                            : "border-neutral-200 hover:border-neutral-400 bg-neutral-50"
                        }`}
                      >
                        <span className="text-[10px] uppercase font-bold tracking-wider">{d.day}</span>
                        <span className="text-lg font-bold">{d.num}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time selection list */}
              <div className="space-y-3">
                <label className="text-xs font-bold tracking-wider uppercase text-neutral-400">Select Time (UTC)</label>
                <div className="flex flex-wrap gap-2">
                  {times.map((t) => {
                    const isSelected = selectedTime === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`px-4 py-2.5 rounded-full border text-xs font-medium transition-all ${
                          isSelected
                            ? "border-neutral-900 bg-neutral-950 text-white"
                            : "border-neutral-200 hover:border-neutral-400 bg-white text-neutral-700"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Button */}
              <button
                disabled={!selectedDate || !selectedTime}
                onClick={() => setStep(2)}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-neutral-900 text-white font-semibold py-3.5 px-6 rounded-full hover:bg-neutral-800 disabled:opacity-40 disabled:hover:bg-neutral-900 transition-all font-display"
              >
                Continue Details <ArrowRight size={16} />
              </button>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Your Contact Details</h3>
                <div className="mt-2 flex items-center gap-4 text-xs font-mono text-neutral-500">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {selectedDate}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {selectedTime}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Mudasir Hussain"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-950 font-sans text-sm bg-neutral-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Work Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="mudasir@example.com"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-950 font-sans text-sm bg-neutral-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Agency Size</label>
                  <select
                    value={formData.agencySize}
                    onChange={(e) => setFormData({ ...formData, agencySize: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-950 font-sans text-sm bg-neutral-50"
                  >
                    <option value="1-5">1 - 5 employees</option>
                    <option value="6-15">6 - 15 employees</option>
                    <option value="16-50">16 - 50 employees</option>
                    <option value="50+">50+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Brief Project Scope / Notes</label>
                  <textarea
                    rows={2}
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    placeholder="Tell us what you're working on (optional)"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-950 font-sans text-sm bg-neutral-50 resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3 px-6 rounded-full border border-neutral-200 text-neutral-500 font-semibold text-sm hover:bg-neutral-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-[2] bg-neutral-900 text-white font-semibold py-3 px-6 rounded-full hover:bg-neutral-800 transition-all font-display flex items-center justify-center gap-2"
                >
                  Confirm Booking <Check size={16} />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-6 space-y-4"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Check size={28} className="stroke-[3]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Appointment Confirmed!</h3>
                <p className="text-sm text-neutral-500 max-w-sm mx-auto">
                  Awesome, <b>{formData.name}</b>! Your 15-minute consultation is booked on <b>{selectedDate}</b> at <b>{selectedTime}</b> (UTC).
                </p>
              </div>

              <div className="mx-auto max-w-xs rounded-xl bg-neutral-50 p-4 border border-neutral-100 text-left space-y-2 text-xs font-mono">
                <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold">Booking Reference</p>
                <p><span className="text-neutral-400">Guest:</span> {formData.email}</p>
                <p><span className="text-neutral-400">Duration:</span> 15 Minutes</p>
                <p><span className="text-neutral-400">Platform:</span> Google Meet Video Link sent</p>
              </div>

              <button
                onClick={resetModal}
                className="mt-4 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs transition-colors font-display"
              >
                Done
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


/* Onboarding Plan Checkout Modal */
interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: string;
}

export function OnboardingModal({ isOpen, onClose, planName, planPrice }: OnboardingModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", promo: "" });
  const [subscribed, setSubscribed] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  const handleBack = () => {
    onClose();
    setSubscribed(false);
    setFormData({ name: "", email: "", company: "", promo: "" });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div id="onboarding-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBack}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          id="onboarding-modal-card"
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl md:p-8 text-neutral-900 border border-neutral-100 z-10"
        >
          {/* Close */}
          <button
            onClick={handleBack}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-950 rounded-full hover:bg-neutral-50 transition-colors"
          >
            <X size={18} />
          </button>

          {!subscribed ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <span className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 rounded mb-2">
                  Subscription Setup
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Subscribe of {planName}</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  You're starting a high-fidelity design container for <span className="font-semibold text-neutral-900">{planPrice}/mo</span>. Pause or cancel whenever.
                </p>
              </div>

              {/* Price outline */}
              <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-sm">
                <div>
                  <span className="font-semibold">{planName} Design Stream</span>
                  <div className="text-xs text-neutral-400 mt-0.5">Recurring billing cycle</div>
                </div>
                <div className="text-right font-bold text-neutral-900">{planPrice}</div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Contact Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Mudasir Hussain"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-950 font-sans text-sm bg-neutral-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Company/Brand Name</label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Lumina Design"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-950 font-sans text-sm bg-neutral-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Work Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="mudasir@lumina.co"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-950 font-sans text-sm bg-neutral-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Promo/Referral Code</label>
                  <input
                    type="text"
                    value={formData.promo}
                    onChange={(e) => setFormData({ ...formData, promo: e.target.value })}
                    placeholder="Optional (e.g. SUBFLOW10)"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-950 font-sans text-sm bg-neutral-50"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-900 text-white font-semibold py-3.5 px-6 rounded-full hover:bg-neutral-800 transition-all font-display flex items-center justify-center gap-2 shadow-lg shadow-neutral-100"
              >
                Proceed to Stripe Checkout <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-6 space-y-4"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <Sparkles size={28} className="animate-pulse" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-neutral-900">Success! Subscription Activated</h3>
                <p className="text-sm text-neutral-500 max-w-sm mx-auto">
                  A warm welcome to <b>{formData.company}</b>! Your Umbral Studio {planName} is active. Our design lead will contact you in under an hour to onboard your Trello request board.
                </p>
              </div>

              <div className="text-left bg-neutral-50 p-4 border border-neutral-100 rounded-xl space-y-2 text-xs font-mono max-w-sm mx-auto">
                <p className="text-neutral-400 uppercase tracking-widest text-[10px] font-bold">Transaction Summary</p>
                <p><span className="text-neutral-400">Account:</span> {formData.email}</p>
                <p><span className="text-neutral-400">Selected Plan:</span> {planName}</p>
                <p><span className="text-neutral-400">Charged amount:</span> {planPrice}</p>
                <p><span className="text-neutral-400">Status:</span> Premium Access Active</p>
              </div>

              <button
                onClick={handleBack}
                className="mt-4 px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-xs transition-all font-display"
              >
                Go back to Umbral Studio
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
