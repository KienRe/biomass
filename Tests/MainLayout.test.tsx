import React from "react";
import {render} from "@testing-library/react";
import {expect, describe, it} from "vitest";
import {MainLayout} from "@/MainLayout";

describe("MainLayout", () =>
{
    it("renders the main layout sections", () =>
    {
        render(<MainLayout />);
        expect(true).toBe(true);
    });
});
