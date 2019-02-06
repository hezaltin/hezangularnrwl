import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { DocumentUnion, Patent, News } from '../../../app/+search/models/document.model'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(
    private http: HttpClient,
  ) { }

  retriveDocument(uri: string): Observable<DocumentUnion> {
    // return this.http.get<DocumentUnion>(`/assets/document/${uri}`)
    const sample1: Patent = {
      uri: "/patent/US8000000B2",
      title: "US8000000B2: A visual prosthesis apparatus and a method for limiting power consumption in a visual prosthesis apparatus. The visual prosthesis apparatus comprises a camera for capturing a video image, a video processing unit associated with the camera, the video processing unit configured to convert the video image to stimulation patterns, and a retinal stimulation system configured to stop stimulating neural tissue in a subject&#39;s eye based on the stimulation patterns when an error is detected in a forward telemetry received from the video processing unit.",
      html: `/assets/document${uri}.html`,
      abstract: "A visual prosthesis apparatus and a method for limiting power consumption in a visual prosthesis apparatus. The visual prosthesis apparatus comprises a camera for capturing a video image, a video processing unit associated with the camera, the video processing unit configured to convert the video image to stimulation patterns, and a retinal stimulation system configured to stop stimulating neural tissue in a subject's eye based on the stimulation patterns when an error is detected in a forward telemetry received from the video processing unit.",
      priorityDate: "2006-10-19",
      assignees: ["Second Sight Medical Products Inc"],
      inventors: [
        "Robert J. Greenberg",
        "Kelly H. McClure",
        "Arup Roy",
      ],
      type: "grant",
      status: "active",
    }

    const sample2: News = {
      uri: "/news/20181227-reuters-national-park-shutdown",
      title: "States help run U.S. National Parks in federal government shutdown",
      html: `/assets/document${uri}.html`,
      description: "U.S. National Parks will be left with just a skeleton staff during the federal government shutdown,and several states are using their own funds to make sure public restrooms get cleaned and visitor centers stay open.",
      timestamp: "2006-10-19T00:00:00.000Z",
    }
    const type = uri.split("/")[1]
    if (type === "patent") {
      return of(sample1)
    } else if (type === "news") {
      return of(sample2)
    }
  }
}
