"use client";

import React from "react";
import { useStore } from "@/store";
import { Button } from "@/components/ui/button";

export default function Filters() {
  const { activeFilters, setFilter, clearFilter, clearAllFilters } = useStore();

  const degreeOptions = ["MSW", "PhD", "MD"];

  const experienceOptions = [
    { label: "0-2 years", value: "0-2" },
    { label: "3-5 years", value: "3-5" },
    { label: "6-10 years", value: "6-10" },
    { label: "10+ years", value: "10+" },
  ];

  const handleDegreeFilter = (degree: string) => {
    if (activeFilters.degree === degree) {
      clearFilter("degree");
    } else {
      setFilter("degree", degree);
    }
  };

  const handleExperienceFilter = (experience: string) => {
    if (activeFilters.yearsOfExperience === experience) {
      clearFilter("yearsOfExperience");
    } else {
      setFilter("yearsOfExperience", experience);
    }
  };

  return (
    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={clearAllFilters}
          className="text-xs"
        >
          Clear All
        </Button>
      </div>

      {/* Degree Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Degree Type</label>
        <div className="flex flex-wrap gap-2">
          {degreeOptions.map((degree) => (
            <Button
              key={degree}
              variant={activeFilters.degree === degree ? "default" : "outline"}
              size="sm"
              onClick={() => handleDegreeFilter(degree)}
              className="text-xs"
            >
              {degree}
            </Button>
          ))}
        </div>
      </div>

      {/* Experience Filter */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Years of Experience
        </label>
        <div className="flex flex-wrap gap-2">
          {experienceOptions.map((option) => (
            <Button
              key={option.value}
              variant={
                activeFilters.yearsOfExperience === option.value
                  ? "default"
                  : "outline"
              }
              size="sm"
              onClick={() => handleExperienceFilter(option.value)}
              className="text-xs"
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Active Filters Display */}
      {(activeFilters.degree || activeFilters.yearsOfExperience) && (
        <div className="pt-2 border-t">
          <p className="text-xs text-gray-600 mb-2">Active Filters:</p>
          <div className="flex flex-wrap gap-1">
            {activeFilters.degree && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                Degree: {activeFilters.degree}
              </span>
            )}
            {activeFilters.yearsOfExperience && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                Experience: {activeFilters.yearsOfExperience}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
