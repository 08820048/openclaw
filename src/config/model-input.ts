import type { AgentModelConfig } from "./types.agents-shared.js";

type AgentModelListLike = {
  primary?: string;
  fallbacks?: string[];
  fallbacksFromModels?: boolean;
};

export function resolveAgentModelPrimaryValue(model?: AgentModelConfig): string | undefined {
  if (typeof model === "string") {
    const trimmed = model.trim();
    return trimmed || undefined;
  }
  if (!model || typeof model !== "object") {
    return undefined;
  }
  const primary = model.primary?.trim();
  return primary || undefined;
}

export function resolveAgentModelFallbackValues(model?: AgentModelConfig): string[] {
  if (!model || typeof model !== "object") {
    return [];
  }
  return Array.isArray(model.fallbacks) ? model.fallbacks : [];
}

export function hasAgentModelFallbacksField(model?: AgentModelConfig): boolean {
  return Boolean(model && typeof model === "object" && Object.hasOwn(model, "fallbacks"));
}

export function resolveAgentModelFallbacksFromModelsValue(model?: AgentModelConfig): boolean {
  if (!model || typeof model !== "object") {
    return false;
  }
  return model.fallbacksFromModels === true;
}

export function toAgentModelListLike(model?: AgentModelConfig): AgentModelListLike | undefined {
  if (typeof model === "string") {
    const primary = model.trim();
    return primary ? { primary } : undefined;
  }
  if (!model || typeof model !== "object") {
    return undefined;
  }
  return model;
}
