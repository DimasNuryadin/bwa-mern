import React from "react";
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'


import Button from './index'

// Test button isDisabled
test("Should not allowed click button if isDisabled is present", () => {
    const { container } = render(<Button isDisabled></Button>)

    // Ekspektasikan / cek ada tag span dan class disabled ga?
    // Pastikan kalau ada di dokumen
    expect(container.querySelector("span.disabled")).toBeInTheDocument();
})


// Test button isLoading
test("Should render loading/spinner", () => {
    // Distract
    const { container, getByText } = render(<Button isLoading></Button>)

    // fungsi getByText : untuk mengambil kata di dalam tag
    // / regex / : untuk mecari kata contoh abc232loadingsds
    // i : case insensitive contoh LoaDiNg
    expect(getByText(/loading/i)).toBeInTheDocument(); // Pastikan kalau ada di dokumen

    // Ekspektasikan / cek ada tag span?
    // Pastikan kalau ada di dokumen
    expect(container.querySelector("span")).toBeInTheDocument();
})


// Test button tag a 
test("Should render <a> tag", () => {
    const { container } = render(<Button type="link" isExternal></Button>)

    // Ekspektasikan / cek ada tag a ga?
    // Pastikan kalau ada di dokumen
    expect(container.querySelector("a")).toBeInTheDocument();
})


// Test button tag link
test("Should render <Link> tag", () => {
    const { container } = render(<Router> <Button href="" type="link"></Button></Router>)

    // Ekspektasikan / cek ada tag a ga?
    // Pastikan kalau ada di dokumen
    expect(container.querySelector("a")).toBeInTheDocument();
})