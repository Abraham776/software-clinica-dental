import React, { useState } from "react";
import { Document, Page } from 	"react-pdf/dist/esm/entry.webpack5";

const LoadPdf = React.forwardRef((props, ref) => {
	const [numPages, setNumPages] = useState(null);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	const { pdf } = props;

	return (
		<Document
			file={pdf}
			options={{ workerSrc: "/pdf.worker.js" }}
			onLoadSuccess={onDocumentLoadSuccess}
			inputRef={ref}
		>
			{Array.from(new Array(numPages), (el, index) => (
				<Page key={`page_${index + 1}`} pageNumber={index + 1} scale={2.0} />
			))}
		</Document>
	);
})

export default LoadPdf;