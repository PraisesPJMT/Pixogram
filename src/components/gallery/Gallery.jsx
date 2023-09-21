import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BiSolidGrid } from "react-icons/bi";

import PHOTOS from "../../store/data.json";

import "./Gallery.scss";

const getPhotos = () => [
  ...PHOTOS.map((photo) => {
    let title = photo.url?.split("/");
    let tags = title[title.length - 2]
      ?.split("-")
      .filter((item) => item.length > 3 && !Number(item));
    return { ...photo, tags };
  }),
];

const Gallery = () => {
  const [list, setList] = useState([
    ...getPhotos().slice(180, 210),
    ...getPhotos().slice(240, 250),
  ]);

  const [processedList, setProcessedList] = useState([]);

  const [search] = useSearchParams();

  const dragItem = useRef();
  const dragOverItem = useRef();

  const searchTerm = search.get("search") || "";

  const dragStart = (event, position) => {
    dragItem.current = position;
  };

  const dragEnter = (event, position) => {
    dragOverItem.current = position;
  };

  const drop = (event) => {
    const copyListItems = [...processedList];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setProcessedList(copyListItems);
  };

  useEffect(() => {
    setProcessedList(list);
  }, [list]);

  useEffect(() => {
    setProcessedList([
      ...list.filter((photo) => {
        if (!searchTerm) return photo;
        let title = photo.url?.split("/");
        let tags = title[title.length - 2]?.split("-");

        if (tags.length > 0) {
          for (let i = 0; i < tags.length; i++) {
            if (
              tags[i].length > 3 &&
              tags[i].includes(searchTerm.toLowerCase())
            )
              return photo;
          }
        }
      }),
    ]);
  }, [searchTerm]);

  return (
    <section className="gallery">
      {searchTerm && (
        <div className="header">
          <h3>Showing search results for {searchTerm}</h3>
        </div>
      )}
      {processedList.length > 0 && (
        <div className="content">
          {processedList.map((photo, index) => (
            <div
              draggable
              key={photo.id}
              className="gallery-item"
              onDragStart={(event) => dragStart(event, index)}
              onDragEnter={(event) => dragEnter(event, index)}
              onDragEnd={drop}
              style={{
                backgroundImage: `url(${photo.src.tiny})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img draggable={false} src={photo.src.medium} alt={photo.alt} />
              <div className="tags-wrap">
                {photo.tags.length > 0 &&
                  photo.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {processedList.length < 1 && (
        <div className="no-result">
          <div>
            <BiSolidGrid />
            No results found
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
