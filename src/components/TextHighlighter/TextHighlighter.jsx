/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';


function TextHighlighter({ diff }) {
  const renderHighlightedText = () => {
    const highlightedParts = [];

    diff.forEach((obj, index) => {
      const { modifiedLine, originalLine } = obj;

      // Find differences between the modified line and the original line
      const differences = [];
      for (let i = 0; i < modifiedLine.length; i++) {
        if (modifiedLine[i] !== originalLine[i]) {
          let j = i;
          while (j < modifiedLine.length && modifiedLine[j] !== originalLine[j]) {
            j++;
          }
          differences.push(modifiedLine.substring(i, j));
          i = j - 1;
        }
      }

      // Split the modified line into segments based on differences
      let lastIndex = 0;
      differences.forEach((difference, diffIndex) => {
        const start = modifiedLine.indexOf(difference, lastIndex);
        const end = start + difference.length;

        // Push the unchanged part before the difference
        if (start > lastIndex) {
          highlightedParts.push(modifiedLine.substring(lastIndex, start));
        }

        // Push the difference with highlighting
        highlightedParts.push(
          <span key={`${index}_${diffIndex}`} style={{ backgroundColor: 'yellow' }}>
            {difference}
          </span>
        );

        lastIndex = end;
      });

      // Push the remaining unchanged part
      if (lastIndex < modifiedLine.length) {
        highlightedParts.push(modifiedLine.substring(lastIndex));
      }

      // Add line break after each line
      highlightedParts.push(<br key={`br_${index}`} />);
    });

    return highlightedParts;
  };

  return <div>{renderHighlightedText()}</div>;
}

export default TextHighlighter;

