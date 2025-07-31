"use client";

import { useStore } from "@/store";

import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Label,
  Badge,
  Input,
} from "@/components/ui";

import { useDebouncedCallback } from "use-debounce";

export default function Filters() {
  const {
    activeFilters,
    searchTerm,
    setFilter,
    clearFilter,
    clearAllFilters,
    setSearchTerm,
  } = useStore();

  const debouncedSetSearchTerm = useDebouncedCallback((value: string) => {
    setSearchTerm(value);
  }, 300);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Update the input immediately for responsive UI
    e.target.value = value;
    // Debounce the actual search term update
    debouncedSetSearchTerm(value);
  };

  const degreeOptions = [
    { value: "all", label: "All Degrees" },
    { value: "MSW", label: "MSW" },
    { value: "PhD", label: "PhD" },
    { value: "MD", label: "MD" },
  ];

  const experienceOptions = [
    { value: "all", label: "All Experience Levels" },
    { value: "0-2", label: "0-2 years" },
    { value: "3-5", label: "3-5 years" },
    { value: "6-10", label: "6-10 years" },
    { value: "10+", label: "10+ years" },
  ];

  const handleDegreeChange = (value: string) => {
    if (value === "all") {
      clearFilter("degree");
    } else {
      setFilter("degree", value);
    }
  };

  const handleExperienceChange = (value: string) => {
    if (value === "all") {
      clearFilter("yearsOfExperience");
    } else {
      setFilter("yearsOfExperience", value);
    }
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="secondary" onClick={clearAllFilters}>
          Clear All
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor="search">Search</Label>
        <Input
          id="search"
          placeholder="Search by first name, last name, or city"
          defaultValue={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="degree">Degree Type</Label>
        <Select
          value={`${activeFilters.degree || "all"}`}
          onValueChange={handleDegreeChange}
        >
          <SelectTrigger className="w-[100%]">
            <SelectValue placeholder="All Degrees" />
          </SelectTrigger>
          <SelectContent>
            {degreeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Years of Experience</Label>
        <Select
          value={`${activeFilters.yearsOfExperience || "all"}`}
          onValueChange={handleExperienceChange}
        >
          <SelectTrigger className="w-[100%]">
            <SelectValue placeholder="All Experience Levels" />
          </SelectTrigger>
          <SelectContent>
            {experienceOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Active Filters Display */}
      {(activeFilters.degree || activeFilters.yearsOfExperience) && (
        <div className="pt-2">
          <p className="text-xs text-gray-600 mb-2">Active Filters:</p>
          <div className="flex flex-wrap gap-1">
            {activeFilters.degree && (
              <Badge> Degree: {activeFilters.degree}</Badge>
            )}
            {activeFilters.yearsOfExperience && (
              <Badge variant="secondary">
                Experience: {activeFilters.yearsOfExperience}
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
